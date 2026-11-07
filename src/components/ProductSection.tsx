import Image from "next/image";
import type { Product, ProductCategory } from "@/types/product";
import ProductCarousel from "./ProductCarousel";
import ProductCatalogModal from "./ProductCatalogModal";
import styles from "./ProductSection.module.css";

interface ProductSectionProps {
  title: string;
  category: ProductCategory;
  banner: string;
  categoryImage: string;
  products: Product[];
}

const bannerContent = {
  sunglasses: {
    headline: "Encontre seu próximo estilo.",
    description: "Modelos que combinam com você e com todos os seus momentos.",
  },
  prescription: {
    headline: "Conforto e estilo para o seu dia a dia.",
    description: "Descubra armações que valorizam sua personalidade.",
  },
  sports: {
    headline: "Tecnologia e performance para acompanhar seu ritmo.",
    description: "Encontre o modelo ideal para superar seus desafios.",
  },
};

export default function ProductSection({
  title,
  category,
  banner,
  categoryImage,
  products,
}: ProductSectionProps) {
  const content = bannerContent[category];

  return (
    <section id={category} className={styles.section}>
      <div className={styles.banner}>
        <Image
          src={banner}
          alt={`Coleção ${title}`}
          fill
          sizes="100vw"
          className={styles.bannerImage}
        />

        <div className={styles.bannerContent}>
          <h2>{content.headline}</h2>
          <p>{content.description}</p>
        </div>
      </div>

      <div className={styles.heading}>
        <h2>{title}</h2>
        <span>Descubra a coleção</span>
      </div>

      <div className={styles.content}>
        <div className={styles.categoryImage}>
          <Image
            src={categoryImage}
            alt={`Categoria ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 35vw"
            className={styles.categoryImageContent}
          />
        </div>

        <div className={styles.productArea}>
          <ProductCarousel products={products} />
        </div>
      </div>

      <div className={styles.catalogLink}>
        <div className={styles.catalogButton}>
          <ProductCatalogModal
            title={title}
            products={products}
          />
        </div>
      </div>
    </section>
  );
}
