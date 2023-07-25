from models.seed_model import SeedModel
from models.produto_model import ProdutoModel
from models.categoria_model import CategoriaModel


def seed(db):
    try:
        seeded = db.query(SeedModel).first()
        if seeded is None:
            db.add(SeedModel(seeded=True))

            categorias = [
                CategoriaModel(id=1, descricao="Brinquedos e Jogos"),
                CategoriaModel(id=2, descricao="Livros e Mídias"),
                CategoriaModel(id=3, descricao="Casa e Decoração")
            ]
            db.add_all(categorias)

            produtos = [
                ProdutoModel(descricao="Detetive", valor=83.99, quantidade=30, imagem="https://m.media-amazon.com/images/I/61d3ovlzqoL._AC_SL1000_.jpg", categoria_id=1),
                ProdutoModel(descricao="War - Special Edition", valor=115.30, quantidade=50, imagem="https://m.media-amazon.com/images/I/61b7dfGwn-L._AC_SX679_.jpg", categoria_id=1),
                ProdutoModel(descricao="Uno", valor=21.99, quantidade=10, imagem="https://m.media-amazon.com/images/I/61wiRgoUD3L._AC_SX679_.jpg", categoria_id=1),
                ProdutoModel(descricao="Bird Box - Josh Malerman", valor=19.99, quantidade=5, imagem="https://m.media-amazon.com/images/I/41p4DHosvDL._SY344_BO1,204,203,200_QL70_ML2_.jpg", categoria_id=2),
                ProdutoModel(descricao="O cemitério - Stephen King", valor=32.90, quantidade=15, imagem="https://m.media-amazon.com/images/I/41McBAhN-VL._SY344_BO1,204,203,200_QL70_ML2_.jpg", categoria_id=2),
                ProdutoModel(descricao="O Silmarillion - J.R.R.Tolkien", valor=36.50, quantidade=12, imagem="https://m.media-amazon.com/images/I/51EZZWkTECL._SY344_BO1,204,203,200_QL70_ML2_.jpg", categoria_id=2),
                ProdutoModel(descricao="Porta-Retratos 20x25cm", valor=45.50, quantidade=40, imagem="https://m.media-amazon.com/images/I/71AlKtgE73L._AC_SY741_.jpg", categoria_id=3),
                ProdutoModel(descricao="Espelho redondo", valor=123.50, quantidade=5, imagem="https://m.media-amazon.com/images/I/71tlfoMWe3L._AC_SY879_.jpg", categoria_id=3),
                ProdutoModel(descricao="Persiana", valor=192.99, quantidade=2, imagem="https://m.media-amazon.com/images/I/61W0sPYn4SL._AC_SX569_.jpg", categoria_id=3)
            ]
            db.add_all(produtos)

            db.commit()
            print("Seed efetuado")
        else:
            print("Seed ignorado")
    except Exception as e:
        db.rollback()
        raise e
    finally:
        db.close()
