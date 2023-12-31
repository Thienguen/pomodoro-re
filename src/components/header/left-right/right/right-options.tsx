'use client'

/* Util */
import { cn } from '@/lib/util/cn'
import { useCallback, useState } from 'react'
import { metadata } from '@/lib/type/metadata'

/* Icons */
import { BsGear } from 'react-icons/bs'        // Imported gear icon
import { ImProfile } from 'react-icons/im'
import { BiUserCircle } from 'react-icons/bi'  // Imported user icon
import { SiBuymeacoffee } from 'react-icons/si'

/* Components */
import { SettingModal } from '@/components/header/index'
import { MenuItem, Menu, HeaderButton } from '@/components/header/index'

const RightOptions: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  /* Open setting modal */
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  /* Render menu items, which is bogus */
  const renderMenuButton = useCallback(
    (onClick: () => void) => (
      <HeaderButton onClick={onClick}>
        <div className={cn('flex flex-row items-center')}>
          <BiUserCircle className={cn('mr-1 h-7 w-7')} /> {/* User icon */}
          Login
        </div>
      </HeaderButton>

      /* Possibly more here, unless we being absolute lazy */
    ),
    []
  )

  return (
    <>
      {/* Right */}
      <ul className={'flex gap-2.5'}>
        {/* Settings */}
        <li>
          <HeaderButton onClick={handleModalToggle}>
            <div className='flex flex-row items-center'>
              <BsGear className={cn('mr-1 h-7 w-7')} /> {/* Gear icon */}
              Setting
            </div>
          </HeaderButton>
        </li>

        {/* And this */}
        <li className='flex flex-row items-center'>
          <Menu menuButton={renderMenuButton}>
            <a href={`${metadata.github}`} target='_blank' rel='noopener noreferrer'>
              <MenuItem icon={<SiBuymeacoffee className={cn(' h-5 w-5  opacity-80')} />}>
                <p className='ml-2'>Star this project if you like it</p>
              </MenuItem>
            </a>
            <a>
              <MenuItem icon={<ImProfile className={cn('h-5 w-5 opacity-80')} />}>
                <p className='ml-2'>No login, too much works</p>
              </MenuItem>
            </a>
          </Menu>
        </li>
      </ul>

      {/* Modal */}
      {isModalOpen && <SettingModal onClose={handleModalToggle} />}
    </>
  )
}

export default RightOptions
