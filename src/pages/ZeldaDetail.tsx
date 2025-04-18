import { useNavigate, useParams } from 'react-router';
import { useDetail } from '../hooks';
import { BasicButton, NotFound, SeparatorLine } from '../components';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { Notyf } from 'notyf';

interface GetHeartsProps {
  hearts?: number;
}
const GetHearts = ({ hearts }: GetHeartsProps) => {
  if (!hearts || hearts == 0)
    return <p className="text-white italic">-No data-</p>;
  const totalHearts = Math.floor(hearts);
  const decimalHearts = hearts % 2;
  return (
    <div className="flex flex-row w-full justify-center items-center gap-2 pe-5">
      {Array.from({ length: totalHearts }).map(() => (
        <div className="w-[40px] h-[40px] overflow-hidden" key={nanoid()}>
          <img src="/icons/heart.png" alt="Detail heart" />
        </div>
      ))}
      {decimalHearts > 0 && (
        <div className="w-[22px] h-[40px] overflow-hidden">
          <img
            src="/icons/heart.png"
            alt="Detail heart cut"
            className="w-[40px] h-[40px]  object-cover object-left"
          />
        </div>
      )}
    </div>
  );
};
interface SeparatedListProps {
  items?: string[];
  icon: string;
}
const SeparatedList = ({ items, icon }: SeparatedListProps) => {
  return (
    <div className="flex items-center space-x-2 font-medium  flex-wrap justify-center">
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <div key={nanoid()} className="flex flex-row gap-2">
            <span className="text-white">{item}</span>
            {index < items.length - 1 && (
              <img src={icon} alt="Detail separator icon" className="w-4 h-6" />
            )}
          </div>
        ))
      ) : (
        <span className="text-white italic">-No data-</span>
      )}
    </div>
  );
};
const ItemList = ({ items, icon }: SeparatedListProps) => {
  return (
    <div className="flex flex-row gap-2 text-xl font-extralight flex-wrap justify-center">
      {items && items.length > 0 ? (
        items.map((item) => (
          <div className="flex flex-row items-center" key={nanoid()}>
            <img src={icon} alt="Detail separator icon" className="size-8" />
            <span className="text-white">{item}</span>
          </div>
        ))
      ) : (
        <span className="text-white italic">-No data-</span>
      )}
    </div>
  );
};

interface DataWeaponProps {
  attack?: number;
  defense?: number;
}
const DataWeapon = ({ attack, defense }: DataWeaponProps) => {
  return (
    <div className="flex flex-row gap-10 text-xl font-extralight flex-wrap justify-center items-center">
      <div className="flex flex-row items-center gap-2">
        <img src={'/icons/sword.png'} className="size-8" alt="Detail sword" />
        <span className="text-white">{attack || '0'} attack</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img src={'/icons/shield.png'} className="size-8" alt="Detail shield" />
        <span className="text-white">{defense || '0'} defense</span>
      </div>
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
      <p className="text-white text-3xl font-bold font-hyllian">{category}</p>
      <img src={img} className="size-17" alt="Detail category" />
    </div>
  );
};
interface TitleDetailProps {
  title: string;
}
const TitleDetail = ({ title }: TitleDetailProps) => {
  return (
    <div className="absolute top-10 md:-left-15 -left-10  border border-zelda-history bg-[url(../frame/pattern-blk-diamond.jpg)] z-10">
      <p className="text-white text-3xl uppercase p-5 font-hyllian">{title}</p>
    </div>
  );
};

export const ZeldaDetail = () => {
  const { zeldaId } = useParams();
  const { detailQuery } = useDetail(Number(zeldaId) || 0);
  const { data, isLoading } = detailQuery;
  const navigate = useNavigate();
  const onNavigateHome = () => {
    navigate('/main');
  };
  const notyf = new Notyf();
  useEffect(() => {
    if (!isLoading) {
      detailQuery.isError
        ? notyf.error({ background: 'red', message: 'Error obtaining data 2' })
        : notyf.success({
            background: 'purple',
            message: 'Data obtained successfully 2',
          });
    }
  }, [isLoading, detailQuery.isError]);
  if (isLoading) {
    return (
      <div className="flex flex-col w-full items-center relative h-[80vh] justify-center">
        <img
          src="/loader/preload-owl2.png"
          className="md:w-1/5 w-1/2 z-10"
          alt="Detail preload owl"
        ></img>
        <img
          src="/loader/preload-dots.png"
          className="absolute md:w-1/5 w-1/2 animate-spin"
          alt="Detail preload dots"
        ></img>
      </div>
    );
  }

  if (detailQuery.isError) {
    return (
      <div className="flex flex-col w-full items-center relative h-[80vh] justify-center">
        <NotFound
          imgUrl="../frame/link404.png"
          size={20}
          classNameTitle="pt-10 text-4xl"
        ></NotFound>
      </div>
    );
  }
  const fnExtraInfo = (category: string) => {
    switch (category) {
      case 'materials':
        return (
          <div className="flex md:flex-row flex-col justify-between md:items-start items-center md:gap-0 gap-3 w-full">
            <div className="flex flex-col items-center gap-1 w-1/2">
              <p className="text-white">Hearts recovered:</p>
              <div className="flex flex-row text-white items-center w-full justify-center gap-2">
                <GetHearts hearts={data.hearts_recovered}></GetHearts>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 w-1/2">
              <p className="text-white">Cooking effect:</p>
              {data.cooking_effect ? (
                <p className=" text-xl font-extralight text-white first-letter:uppercase">
                  {data.cooking_effect}
                </p>
              ) : (
                <p className="text-white italic">-No data-</p>
              )}
            </div>
          </div>
        );

      case 'treasure':
      case 'creatures':
      case 'monsters':
        return (
          <div className="flex flex-col items-center gap-1">
            <p className="text-white">Drops:</p>
            <div className="flex flex-row text-white items-center w-full justify-center gap-2">
              <ItemList
                items={data.drops}
                icon={
                  data.category == 'creatures'
                    ? '../icons/meat.png'
                    : '../frame/bomb.png'
                }
              ></ItemList>
            </div>
          </div>
        );
      case 'equipment':
        return (
          <div className="flex flex-col items-center gap-1">
            <p className="text-white">Properties:</p>
            <DataWeapon
              attack={data.properties.attack}
              defense={data.properties.defense}
            ></DataWeapon>
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <div className="flex md:flex-row  flex-col-reverse w-full justify-center items-center gap-10">
        <div className="md:w-2/4 w-[80%] md:ms-20 ms-5 my-10 flex flex-col relative bg-repeat px-5 md:pt-15 pt-40 pb-15 gap-4 border border-zelda-history bg-[url(../frame/pattern-green-diamond.jpg)]">
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
          <div className="flex md:flex-row flex-col justify-center gap-5 items-center">
            <div className="flex flex-col text-white">
              <p>ID:</p>
              <p className="text-4xl font-bold">{data.id}</p>
            </div>
            <SeparatorLine
              version="version01"
              width={90}
              className="flex md:hidden"
            ></SeparatorLine>
            <div className="md:flex hidden flex-col">
              <p className="text-zelda-history text-5xl">|</p>
            </div>
            <div className="flex flex-col md:items-start items-center text-white gap-2">
              <p>Locations:</p>
              <SeparatedList
                items={data.common_locations}
                icon={'../icons/rupee.png'}
              ></SeparatedList>
            </div>
          </div>
          {fnExtraInfo(data.category)}

          {/* Images in the corners */}
          <img
            src="../frame/deco-corner.png"
            className="absolute top-1 left-1 size-20 -scale-y-100"
            alt="Corner Image top left"
          />
          <img
            src="../frame/deco-corner.png"
            className="absolute top-1 right-1 size-20 transform -scale-x-100 -scale-y-100"
            alt="Corner Image top right"
          />
          <img
            src="../frame/deco-corner.png"
            className="absolute bottom-1 left-1 size-20 "
            alt="Corner Image bottom left"
          />
          <img
            src="../frame/deco-corner.png"
            className="absolute bottom-1 right-1 size-20 transform -scale-x-100"
            alt="Corner Image bottom right"
          />
        </div>
        <div className=" md:w-1/4 w-[80%] relative flex flex-col items-center justify-center p-5 bg-[url(../frame/gameplay-frame.png)]  bg-no-repeat bg-cover bg-center ">
          <img src={data.image} className="size-full rounded-full" alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-10">
        <BasicButton
          imgButton="../arrow/arrow-left-white.png"
          label="Back to home"
          className="w-[220px] p-5 bg-zelda-history px-4 py-4 hover:bg-black! hover:text-white!"
          classButton="size-5"
          fnClickButton={onNavigateHome}
        ></BasicButton>
      </div>
    </>
  );
};
