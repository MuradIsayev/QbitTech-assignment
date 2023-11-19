type ValueOfProperty = string | number | boolean;
type UnitOfProperty = 'm²' | 'AZN';

type Props = {
  header: string;
  icon?: string;
  value: ValueOfProperty;
  unit?: UnitOfProperty;
};

const InfoBox = ({ header, icon, value, unit }: Props) => {
  if (value === true || value === false) value = value ? 'Yes' : 'No';

  return (
    <div
      className={`flex flex-col ${
        header === 'Description' ? 'grow' : 'lg:w-48 grow lg:grow-0'
      } w-48 p-2 bg-gray-200 rounded-lg h-28 dark:bg-gray-800`}
    >
      <h1 className="text-[1.2rem] uppercase font-semibold">{header}</h1>
      <div className="flex items-center justify-center gap-2 mt-1">
        <div className="object-contain w-6 h-6">
          <img src={icon} alt="" />
        </div>
        <p
          className={`text-[1.1rem] font-semibold text-gray-700 dark:text-gray-400 ${
            header === 'Description' ? 'text-[.88rem]' : 'text-[1.1rem]'
          }`}
        >
          {value} {unit}
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
