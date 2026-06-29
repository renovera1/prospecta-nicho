from __future__ import annotations

PROHIBITED_EXPORT_FIELDS = {
    "cpf",
    "socio",
    "nome_socio",
    "representante_legal",
    "faixa_etaria",
    "telefone_particular",
    "email_pessoal",
}

BASE_EXPORT_FIELDS = [
    "cnpj",
    "razao_social",
    "nome_fantasia",
    "cnae_principal",
    "municipio",
    "uf",
    "endereco_comercial",
    "porte",
    "data_abertura",
    "situacao_cadastral",
]


def allowed_export_fields() -> list[str]:
    return [field for field in BASE_EXPORT_FIELDS if field not in PROHIBITED_EXPORT_FIELDS]


def classify_privacy_risk(record: dict[str, object]) -> bool:
    text = " ".join(str(value).lower() for value in record.values())
    return "mei" in text or "empresário individual" in text or "empresario individual" in text


def assert_no_prohibited_fields(fields: list[str]) -> None:
    blocked = PROHIBITED_EXPORT_FIELDS.intersection({field.lower() for field in fields})
    if blocked:
        raise ValueError(f"Campos proibidos para exportação padrão: {', '.join(sorted(blocked))}")
