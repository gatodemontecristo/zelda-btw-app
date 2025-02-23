import { useParams } from 'react-router';
import { useDetail } from '../hooks';

interface SeparatedListProps {
  items: string[];
  icon: string;
}
const SeparatedList = ({ items, icon }: SeparatedListProps) => {
  return (
    <div className="flex items-center space-x-2 font-medium ">
      {items.map((item, index) => (
        <>
          <span className="text-white">{item}</span>
          {index < items.length - 1 && (
            <img src={icon} alt="separator icon" className="w-4 h-6" />
          )}
        </>
      ))}
    </div>
  );
};
interface CategoryDetailProps {
  category: string[];
  img: string;
}
const CategoryDetail = ({ category, img }: CategoryDetailProps) => {
  return (
    <div className="flex flex-row w-full justify-end items-center gap-2 pe-5">
      <p className="text-white text-2xl font-bold font-hyllian">{category}</p>
      <img src={img} className="size-15" />
    </div>
  );
};

export const ZeldaDetail = () => {
  const { zeldaId } = useParams();
  console.log(zeldaId);
  const { detailQuery } = useDetail(Number(zeldaId) || 0);
  const { data, isLoading } = detailQuery;
  if (isLoading) {
    console.log(data);
    return <p>Loading...</p>;
  }
  return (
    <div className="w-2/4 ms-40 my-10 flex flex-col relative bg-repeat px-5 pt-15 pb-5 gap-4 border border-zelda-history bg-[url(../frame/pattern-green-diamond.jpg)]">
      <div className="absolute top-10 -left-15  border border-zelda-history bg-[url(../frame/pattern-blk-diamond.jpg)] z-10">
        <p className="text-white text-3xl uppercase p-5 font-hyllian">
          {data.name}
        </p>
      </div>
      <CategoryDetail
        category={data.category}
        img={`../icons/${data.category}.png`}
      ></CategoryDetail>

      <div>
        <p className="text-white text-base font-medium text-center italic">
          {data.description}
        </p>
      </div>
      <div className="flex flex-row justify-center gap-5 items-center">
        <div className="flex flex-col text-white">
          <p>ID:</p>
          <p className="text-4xl font-bold">{data.id}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-zelda-history text-5xl">|</p>
        </div>
        <div className="flex flex-col text-white">
          <p>Locations:</p>
          <SeparatedList
            items={data.common_locations}
            icon={'../icons/rupee.png'}
          ></SeparatedList>
        </div>
      </div>
      {/* Images in the corners */}
      <img
        src="../frame/deco-corner.png"
        className="absolute top-1 left-1 size-15 -scale-y-100"
        alt="Corner Image"
      />
      <img
        src="../frame/deco-corner.png"
        className="absolute top-1 right-1 size-15 transform -scale-x-100 -scale-y-100"
        alt="Corner Image"
      />
      <img
        src="../frame/deco-corner.png"
        className="absolute bottom-1 left-1 size-15 "
        alt="Corner Image"
      />
      <img
        src="../frame/deco-corner.png"
        className="absolute bottom-1 right-1 size-15 transform -scale-x-100"
        alt="Corner Image"
      />
    </div>
  );
};
