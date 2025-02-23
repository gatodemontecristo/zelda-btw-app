import { useParams } from 'react-router';
import { useDetail } from '../hooks';
import { BasicButton } from '../components';

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
const ItemList = ({ items, icon }: SeparatedListProps) => {
  return (
    <div className="flex flex-row gap-2 text-base font-extralight">
      {items.map((item) => (
        <div className="flex flex-row items-center">
          <img src={icon} alt="separator icon" className="size-8" />
          <span className="text-white">{item}</span>
        </div>
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
interface TitleDetailProps {
  title: string;
}
const TitleDetail = ({ title }: TitleDetailProps) => {
  return (
    <div className="absolute top-10 -left-15  border border-zelda-history bg-[url(../frame/pattern-blk-diamond.jpg)] z-10">
      <p className="text-white text-3xl uppercase p-5 font-hyllian">{title}</p>
    </div>
  );
};

export const ZeldaDetail = () => {
  const { zeldaId } = useParams();
  const { detailQuery } = useDetail(Number(zeldaId) || 0);
  const { data, isLoading } = detailQuery;
  if (isLoading) {
    console.log(data);
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="flex flex-row w-full justify-center items-center gap-10">
        <div className="w-2/4 ms-20 my-10 flex flex-col relative bg-repeat px-5 pt-15 pb-15 gap-4 border border-zelda-history bg-[url(../frame/pattern-green-diamond.jpg)]">
          <TitleDetail title={data.name}></TitleDetail>
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
          <div className="flex flex-col items-center gap-1">
            <p className="text-white">Drops:</p>
            <div className="flex flex-row text-white items-center w-full justify-center gap-2">
              <ItemList
                items={data.drops}
                icon={'../frame/bomb.png'}
              ></ItemList>
            </div>
          </div>
          {/* Images in the corners */}
          <img
            src="../frame/deco-corner.png"
            className="absolute top-1 left-1 size-17 -scale-y-100"
            alt="Corner Image"
          />
          <img
            src="../frame/deco-corner.png"
            className="absolute top-1 right-1 size-17 transform -scale-x-100 -scale-y-100"
            alt="Corner Image"
          />
          <img
            src="../frame/deco-corner.png"
            className="absolute bottom-1 left-1 size-17 "
            alt="Corner Image"
          />
          <img
            src="../frame/deco-corner.png"
            className="absolute bottom-1 right-1 size-17 transform -scale-x-100"
            alt="Corner Image"
          />
        </div>
        <div className=" w-1/4 relative flex flex-col items-center justify-center p-5 bg-[url(../frame/gameplay-frame.png)]  bg-no-repeat bg-cover bg-center ">
          <img src={data.image} className="size-full rounded-full" alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-10">
        <BasicButton
          imgButton="../arrow/arrow-left-white.png"
          label="Back to home"
          className="w-[220px] p-5 bg-zelda-history px-4 py-4 hover:bg-black! hover:text-white!"
          classButton="size-5"
        ></BasicButton>
      </div>
    </>
  );
};
