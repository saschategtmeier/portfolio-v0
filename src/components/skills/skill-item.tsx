import { FC, useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';

import { SkillLevelBar, SkillTag } from '.';
import { ANIMATE_CLASSES } from '../../constants';
import { Skill } from '../../models';

type SkillItemProps = {
  skill: Skill;
};

export const SkillItem: FC<SkillItemProps> = ({
  skill: { name, level, tags },
}) => {
  const tagContainerRef = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${ANIMATE_CLASSES.skills.tag}`, {
        y: -8,
        stagger: { amount: 0.25, from: 'end' },
      });
    }, tagContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4 tablet:gap-6">
        <h3 className="drop-shadow-sm">{name}</h3>
        <div className="flex flex-wrap gap-2" ref={tagContainerRef}>
          {tags.map((tag, index) => (
            <SkillTag
              key={index}
              tag={tag}
              className={ANIMATE_CLASSES.skills.tag}
            />
          ))}
        </div>
      </div>

      <SkillLevelBar level={level} />
    </div>
  );
};
