import UnderlinedTitle from '../components/molecules/UnderlinedTitle';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  ButtonGroup,
  CardResource,
  CardSkeleton,
  NotFound,
  Pagination,
  Paragraph,
} from '../components';
import { usePagination, useResources } from '../hooks';
import { BOTWCompendiumProps, typeCompendium } from '../helpers';
import { Notyf } from 'notyf';
import { useMediaQuery } from 'react-responsive';

export const ZeldaMain = () => {
  const [selectedOption, setSelectedOption] = useState('monsters');
  const { compendiumQuery } = useResources(selectedOption);

  const itemsPerPage = 12;
  const { currentData, currentPage, maxPage, next, prev, jump } = usePagination(
    compendiumQuery.data || [],
    itemsPerPage,
  );

  useEffect(() => {
    jump(1);
  }, [compendiumQuery.data]);

  const notyf = new Notyf();

  useEffect(() => {
    if (!compendiumQuery.isLoading) {
      compendiumQuery.isError
        ? notyf.error({ background: 'red', message: 'Error obtaining data' })
        : notyf.success({
            background: 'purple',
            message: 'Data obtained successfully',
          });
    }
  }, [compendiumQuery.isLoading, compendiumQuery.isError]);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const textSize = isMobile ? 'lg' : 'xl';
  return (
    <div className="flex flex-col gap-20 text-center items-center justify-center ">
      <Paragraph color="zelda-history" size={textSize}>
        <p>
          Embark on a reimagined adventure through Hyrule with our fresh Ul
          redesign for The Legend of Zelda: Breath of the Wild. Seamlessly
          blending classic aesthetics with modern functionality, our alternative
          Ul options fix existing issues and breathe new life into the gameplay
          experience.
        </p>
        <p>
          Navigate menus effortlessly and manage your inventory with intuitive
          ease. We've optimized every detail to minimize distractions and
          maximize immersion, ensuring that every moment in the game feels as
          legendary as the hero's journey.
        </p>
        <p>
          Rediscover the magic of Hyrule with a Ul that honors the past while
          embracing innovation. The redesigned interface for The Legend of
          Zelda: Breath of the Wild awaits to elevate your gaming adventure to
          new heights.
        </p>
      </Paragraph>

      <UnderlinedTitle className="mt-8">
        <UnderlinedTitle.Title
          label="Features"
          size="text-5xl"
          className="mt-4"
        ></UnderlinedTitle.Title>
        <UnderlinedTitle.Separator
          width={40}
          version="version02"
        ></UnderlinedTitle.Separator>
      </UnderlinedTitle>

      <ButtonGroup
        options={typeCompendium}
        selectedValue={selectedOption}
        onChange={setSelectedOption}
        color="blue-900"
        size="2xl"
      />
      <div className="flex flex-wrap justify-center gap-4">
        {compendiumQuery.isLoading &&
          Array.from({ length: 12 }).map(() => (
            <CardSkeleton
              key={nanoid()}
              className="w-1/5 border border-zelda-history rounded-lg"
            ></CardSkeleton>
          ))}

        {currentData() &&
          (currentData() as BOTWCompendiumProps[]).map(
            (resource: BOTWCompendiumProps) => (
              <CardResource
                key={nanoid()}
                className="w-1/5 gap-2"
                resource={resource}
              ></CardResource>
            ),
          )}

        {currentData().length === 0 && !compendiumQuery.isLoading && (
          <NotFound
            imgUrl="../frame/link404.png"
            size={100}
            classNameTitle="pt-10 text-4xl"
          ></NotFound>
        )}
      </div>
      {currentData().length > 0 && (
        <Pagination
          currentPage={currentPage}
          maxPage={maxPage}
          onNext={next}
          onPrev={prev}
          onJump={jump}
        />
      )}
    </div>
  );
};
