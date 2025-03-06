import clsx from 'clsx';

export interface SeparatorLineProps {
  /**
   * Version of the separator
   */
  version?: 'version01' | 'version02' | 'version03';
  width?: number;
  className?: string;
}
export const SeparatorLine = ({
  version = 'version01',
  width = 20,
  className,
}: SeparatorLineProps) => {
  const getSeparator = (version: string) => {
    switch (version) {
      case 'version01':
        return '../separator/arrow_separator.png';
      case 'version02':
        return '../separator/gold_separator.png';
      default:
        return '../separator/elegant_separator.png';
    }
  };
  return (
    <div
      className={clsx(
        'flex flex-row w-full items-center justify-center',
        className,
      )}
    >
      <img
        src={getSeparator(version)}
        alt="separator"
        style={{
          width: width + '%',
        }}
      />
    </div>
  );
};
