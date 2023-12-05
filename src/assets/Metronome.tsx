interface PropsType {
  size?: number;
  onClick?: () => void;
  className?: string;
}

export const Metronome = ({
  size = 24,
  onClick,
  className
}: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`cursor-pointer ${className}`}
    >
      <path d="M17.5444 10.7663L20.055 8.00438C20.186 7.85675 20.2535 7.66344 20.2429 7.46637C20.2323 7.2693 20.1444 7.08435 19.9984 6.95162C19.8523 6.81889 19.6598 6.74908 19.4627 6.75731C19.2655 6.76555 19.0795 6.85118 18.945 6.99563L17.0185 9.11438L15.406 4.04532C15.3102 3.74143 15.1198 3.4761 14.8626 3.28805C14.6054 3.1 14.2949 2.99907 13.9763 3.00001H10.0228C9.70422 2.99907 9.39365 3.1 9.13645 3.28805C8.87925 3.4761 8.68889 3.74143 8.59314 4.04532L3.82033 19.0453C3.74881 19.2702 3.73134 19.5087 3.76934 19.7416C3.80734 19.9745 3.89975 20.1951 4.03904 20.3855C4.17834 20.576 4.3606 20.7309 4.57101 20.8377C4.78143 20.9444 5.01406 21 5.25002 21H18.75C18.986 21 19.2186 20.9444 19.429 20.8377C19.6394 20.7309 19.8217 20.576 19.961 20.3855C20.1003 20.1951 20.1927 19.9745 20.2307 19.7416C20.2687 19.5087 20.2512 19.2702 20.1797 19.0453L17.5444 10.7663ZM17.3175 15H13.695L16.3781 12.0488L17.3175 15ZM10.0228 4.50001H13.9763L15.8513 10.3969L11.6681 15H6.68158L10.0228 4.50001ZM5.25002 19.5L6.20439 16.5H17.7947L18.75 19.5H5.25002Z" fill="currentColor" />
    </svg>
  )
}