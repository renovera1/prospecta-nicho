from __future__ import annotations

import argparse
import json
from pathlib import Path

from workers.rfb_cnpj.privacy import classify_privacy_risk, allowed_export_fields


MINIMUM_GROUPS = ("Empresas", "Estabelecimentos", "Simples", "Cnaes", "Municipios")


def manifest_path() -> Path:
    path = Path("workers/rfb_cnpj/manifest.sample.json")
    path.parent.mkdir(parents=True, exist_ok=True)
    return path


def discover(sample: bool = False) -> dict:
    base_url = "sample://rfb-cnpj" if sample else "env:RFB_CNPJ_BASE_URL"
    manifest = {
        "source": base_url,
        "snapshot_date": "sample" if sample else None,
        "minimum_groups": list(MINIMUM_GROUPS),
        "files": [
            {"group": group, "url": f"{base_url}/{group}.zip", "validated": sample}
            for group in MINIMUM_GROUPS
        ],
    }
    manifest_path().write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    return manifest


def command_status(name: str, sample: bool = False) -> dict:
    return {
        "ok": True,
        "command": name,
        "sample": sample,
        "message": "Scaffold operacional criado. Conecte RFB_CNPJ_BASE_URL, R2/S3 e ClickHouse para processamento nacional.",
    }


def export_sample() -> dict:
    fields = allowed_export_fields()
    preview = [
        {
            "cnpj": "00.000.000/0001-00",
            "nome_fantasia": "Empresa A***",
            "municipio": "Campinas",
            "uf": "SP",
            "requires_privacy_review": classify_privacy_risk({"porte": "MEI", "natureza_juridica": "Empresário individual"}),
        }
    ]
    return {"ok": True, "fields": fields, "preview": preview, "masked": True}


def main() -> None:
    parser = argparse.ArgumentParser(prog="python -m workers.rfb_cnpj")
    parser.add_argument(
        "command",
        choices=["discover", "download", "validate", "transform", "load", "verify", "run", "export"],
    )
    parser.add_argument("--sample", action="store_true")
    args = parser.parse_args()

    if args.command == "discover":
        result = discover(sample=args.sample)
    elif args.command == "export":
        result = export_sample() if args.sample else command_status("export", sample=False)
    else:
        if args.command == "run" and args.sample:
            discover(sample=True)
        result = command_status(args.command, sample=args.sample)

    print(json.dumps(result, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
