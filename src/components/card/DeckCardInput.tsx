import { useEvent, useStore } from "effector-react";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef } from "react";
import { $newDeckImg, $newDeckName, addDeckImg, addDeckName } from "src/store/newDeck";
import PlusIcon from "../icon/plusIcon";
import { DeckCardProps } from "./DeckCard";

type DeckCardInputProps = DeckCardProps;

export const DeckCardInput = ({ item }: DeckCardInputProps) => {
  const addDeckImgEvent = useEvent(addDeckImg);
  const addDeckNameEvent = useEvent(addDeckName);

  const deckImg = useStore($newDeckImg);
  const deckName = useStore($newDeckName);

  const inputFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {

  }, [deckName, deckImg])

  

//   const upLoadFile = async (file: File): Promise<{ url: string }> => {
//     const formData = new FormData()
//     formData.append('photo', file)

//     const {data} = await Axios.post('/upload', formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         },
//     })
//     return data;
// }

const handleChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const file = target.files?.[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        addDeckImgEvent(imageUrl);
        // const data = await upLoadFile(file)
        // target.value = '';
        // addDeckImgEvent(data.url)
        // setFieldValue('avatarURL', data.url)
    }
}; 

useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener<any>('change', handleChangeImage);
  }
  }, [])


  return (
    <div className='card w-52 h-64'>
      <div className="h-4/5 w-auto flex justify-center relative object-contain overflow-hidden ">
        <input id="imgInput" type="file" ref={inputFileRef} className="hidden" />
        {deckImg === ''
          ? <label htmlFor="imgInput"
            className="text-center cursor-pointer self-center p-16 border-2 border-solid border-brownLight rounded 
          hover:border-brownDark"
          >
            <PlusIcon />
          </label>
          : <label htmlFor="imgInput" className='h-52 w-52 cursor-pointer relative'>
            <Image src={deckImg} alt='Card image' fill className='object-cover hover:brightness-50' />
          </label>
        }
      </div>
      <div className="flex self-center m-2">
        <input
          className="w-full p-1 border-2 border-solid border-brownLight rounded 
        hover:border-brownDark focus:border-red"
          onChange={(e) => addDeckNameEvent(e.target.value)}
          value={deckName}
          placeholder='Введите название колоды'
        />
      </div>

    </div>
  )
}