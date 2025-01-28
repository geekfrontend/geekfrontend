type LogoProps = React.SVGAttributes<SVGElement>;

const Logo = (props: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="60"
      viewBox="0 0 100 100"
    >
      <text
        x="50%"
        y="50%"
        font-family="Poppins, sans-serif"
        font-size="40"
        fill="black"
        text-anchor="middle"
        alignment-baseline="middle"
      >
        harke.
      </text>
    </svg>
  );
};

export { Logo };
