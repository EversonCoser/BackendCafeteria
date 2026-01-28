CREATE FUNCTION trg_fn_update_produto()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.preco IS DISTINCT FROM OLD.preco THEN
    INSERT INTO historico (
      "produtoId",
      "precoAntigo",
      "precoNovo",
      "dataAlteracao"
    )
    VALUES (
      OLD."idProduto",
      OLD.preco,
      NEW.preco,
      NOW()
    );
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_update_produto
AFTER UPDATE OF preco ON produto
FOR EACH ROW
EXECUTE FUNCTION trg_fn_update_produto();