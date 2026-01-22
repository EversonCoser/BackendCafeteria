-- Função da trigger
CREATE OR REPLACE FUNCTION trg_fn_update_produto()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.preco IS DISTINCT FROM OLD.preco THEN
    INSERT INTO historico (
      produto_id,
      preco_antigo,
      preco_novo,
      data_alteracao
    )
    VALUES (
      OLD.id,
      OLD.preco,
      NEW.preco,
      NOW()
    );
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_update_produto
AFTER UPDATE OF preco ON produto
FOR EACH ROW
EXECUTE FUNCTION trg_fn_update_produto();
