const NavbarTop = () => {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          .marquee-wrapper {
            overflow: hidden;
            width: 100%;
            background: #063A2F;
            color:white;
            height: 52px;
            display: flex;
            align-items: center;
          }

          .marquee-content {
            display: flex;
            align-items: center;
            gap: 60px;
            white-space: nowrap;
            width: max-content;
            animation: marquee 35s linear infinite;
          }

          .marquee-content:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="marquee-wrapper text-white">

        <div className="marquee-content px-4 text-sm text-white">

          <p>
            We're excited to announce our business expansion — now available globally
          </p>

          <p>
            Multi Agents now live and ready to automate your business
          </p>

          <p>
            New: Advanced RAG system with Multi Languages
          </p>

          <p>
            AI Automation helping businesses save time and increase sales
          </p>

          {/* Duplicate for smooth infinite scroll */}

          <p>
            We're excited to announce our business expansion — now available globally
          </p>

          <p>
            Multi Agents now live and ready to automate your business
          </p>

          <p>
            New: Advanced RAG system with Multi Languages
          </p>

          <p>
            AI Automation helping businesses save time and increase sales
          </p>

        </div>

      </div>
    </>
  )
}

export default NavbarTop