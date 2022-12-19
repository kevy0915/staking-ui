import { CardinalLogoIcon } from 'assets/icons/CardinalLogoIcon'

import { HorizontalDivider } from '@/components/UI/HorizontalDivider'
import { BodyCopy } from '@/components/UI/typography/BodyCopy'
import { HeadingSecondary } from '@/components/UI/typography/HeadingSecondary'
import { LargeCopy } from '@/components/UI/typography/LargeCopy'

export const TimeBasedParametersTipFour = () => {
  return (
    <>
      <div className="mb-6">
        <CardinalLogoIcon />
      </div>
      <HeadingSecondary>Stake pool end date</HeadingSecondary>
      <BodyCopy>Tips & Tricks</BodyCopy>
      <div className="w-24 py-12">
        <HorizontalDivider />
      </div>
      <div className="max-w-lg space-y-4 px-4 text-center">
        <LargeCopy>
          Select end date for your pool when staking is disabled but claiming
          rewards and unstaking is still enabled.
        </LargeCopy>
      </div>
    </>
  )
}
