import MainSection from '../components/molecules/MainSection';
import UnderlinedTitle from '../components/molecules/UnderlinedTitle';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ButtonGroup, CardResource, Paragraph } from '../components';
import { useResources } from '../hooks';
import { BOTWCompendiumProps, typeCompendium } from '../helpers';

export const ZeldaMain = () => {
  const [selectedOption, setSelectedOption] = useState('monsters');
  const { compendiumQuery } = useResources(selectedOption);
  console.log(compendiumQuery.data);
  return (
    <div className="flex flex-col gap-20 text-center items-center justify-center bg-zelda-purple overflow-x-hidden">
      <MainSection shadowSize="full" color="zelda-purple">
        <MainSection.Logo
          imgUrl="../logo_botw.png"
          size={40}
        ></MainSection.Logo>
        <MainSection.Title
          label="Hyrule Compendium (BTW)"
          size="text-5xl"
          className="mt-4"
        ></MainSection.Title>
        <MainSection.Separator width={40}></MainSection.Separator>
      </MainSection>
      <Paragraph color="zelda-history" size="xl">
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
        {compendiumQuery.data &&
          compendiumQuery.data.map((resource: BOTWCompendiumProps) => (
            <CardResource
              key={nanoid()}
              className="w-1/5 gap-2 "
              resource={resource}
            ></CardResource>
          ))}
      </div>
    </div>
  );
};
