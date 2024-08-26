import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function ExampleSmall({title, classTitle, classMenu}) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex ">
        <Popover>
          <PopoverButton className={`block font-semibold  focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white ${classTitle}`}>
            {title}
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className={`divide-y divide-white/5 rounded-xl  mt-3 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 ${classMenu}`}
          >
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className={`font-semibold ${classMenu}`}>Insights</p>
                <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Automations</p>
                <p className="text-white/50">Create your own targeted content</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Reports</p>
                <p className="text-white/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                <p className="font-semibold text-white">Documentation</p>
                <p className="text-white/50">Start integrating products and tools</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  )
}