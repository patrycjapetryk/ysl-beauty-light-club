import { rulesData } from './rulesData';

export function RulesText() {
  return (
    <>
      {rulesData.map(({ id, title, content }) => (
        <div className='mt-8' key={id}>
          <h3>{`§${id} ${title}`}</h3>
          <ul className='my-11 flex w-full flex-col items-center px-5 text-xs xl:px-12'>
            {content.map((item, index) => (
              <li key={index}>
                <span>{`${index + 1}. ${item}`}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
