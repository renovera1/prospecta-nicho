from workers.rfb_cnpj.privacy import allowed_export_fields, assert_no_prohibited_fields, classify_privacy_risk


def test_allowed_fields_exclude_personal_data():
    fields = allowed_export_fields()
    assert "cpf" not in fields
    assert "nome_socio" not in fields
    assert "representante_legal" not in fields


def test_prohibited_fields_raise():
    try:
        assert_no_prohibited_fields(["cnpj", "cpf"])
    except ValueError:
        return
    raise AssertionError("CPF deveria ser bloqueado")


def test_mei_requires_privacy_review():
    assert classify_privacy_risk({"porte": "MEI"}) is True
    assert classify_privacy_risk({"porte": "EPP"}) is False
