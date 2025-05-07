import { cn } from '@/utils/utils';

export default function ModalComponent(props) {
  const { open, close, title, contents } = props;

  return (
    <div
      className={cn(
        'transition-all duration-200 fixed top-0 left-0 w-full h-dvh bg-black-30 backdrop-blur-[15px] flex items-center justify-center -z-50 opacity-0',
        open && 'z-50 opacity-100 no-scroll'
      )}
    >
      <div className="px-[100px] py-[100px] md:px-[50px] sm:px-[30px] md:py-[100px] sm:py-[50px] w-full">
        <div className="max-w-6xl mx-auto">
          <div
            className={cn(
              'transition-all duration-300 bg-[#20232A] p-[50px] md:p-[30px] rounded-[30px] flex flex-col gap-[30px] max-h-[90vh] scale-125',
              open && 'scale-100'
            )}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[30px] sm:text-[17.5px] font-[600] text-white">
                {title || 'No Title'}
              </h3>
              <button
                className="cursor-pointer w-[40px] h-[40px] bg-white text-black flex justify-center items-center rounded-full"
                onClick={close}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-[20px] sm:text-[17.5px] text-white">
                {contents || 'No contents'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
