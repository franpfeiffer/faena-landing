import React from 'react'

type Props = {
    title: string;
    description: string;
    image: string;
    home: boolean;
}

const Header = (props: Props) => {
    return (
        <div className={`bg-cover bg-center h-96 lg:h-screen`} style={{ backgroundImage: `url(${props.image})` }}>
            <div className='text-white text-center h-full flex flex-col justify-center items-center bg-black bg-opacity-50'>
                <div className='lg:w-2/5'>
                    <h1 className='text-5xl lg:text-7xl font-neue-plak-black'>{props.title}</h1>
                    <p className='text-4xl '>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Header
