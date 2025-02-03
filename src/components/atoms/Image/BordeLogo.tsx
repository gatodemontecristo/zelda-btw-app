interface BordeLogoProps {
  /**
   * Url image
   */
  imgUrl: string;
  /**
   * Size image porcent
   */
  size?: number;
}
export const BordeLogo = ({ imgUrl, size = 40 }: BordeLogoProps) => {
  return (
    <div className="flex justify-center items-center relative py-8">
      <div
        className="absolute inset-0 border-t-8 border-b-8 border-yellow-500 gradient-border

       
        bg-gradient-to-r from-transparent via-gray-600/70 to-transparent "
      ></div>
      <img className={`relative z-10 w-[${size}%]`} src={imgUrl} alt="Logo" />
    </div>
  );
};
