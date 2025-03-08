import { CarouselMutiple } from "../carousel/MultipleCarousel";
import { StaticImageData } from 'next/image';

interface CategoryCollectionProps {
    images: StaticImageData[]
}
const CategoryCollection:React.FC<CategoryCollectionProps> = ({ images }) => {
    return (
        <div>
          <div className="heading-center">
            Category Collections
          </div>
          <CarouselMutiple images={images} />
        </div>
      );
    }
    
    export default CategoryCollection;
    