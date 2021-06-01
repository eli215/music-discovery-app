import React from 'react';


interface Song {
    name: string;
    artist: string;
    tags: string;
}

let songSelection = [
    //1
    {
        name: 'Save Your Tears (with Ariana Grande) (Remix)',
        artist: '-The Weeknd, Ariana Grande',
        tags: 'pop, electronic, soul, r&b, dance pop, male vocals, female vocals'
    },

    //2
    {
        name: 'Dead to Me',
        artist: '-Kali Uchis',
        tags: 'pop, colombian, lush, alternative r&b, indie pop, female vocals'
    },

    //3
    {
        name: 'MONTERO (Call Me By Your Name',
        artist: '-Lil Nas X',
        tags: 'pop rap, country rap, r&b, male vocals'
    },

    //4
    {
        name: 'Wait A Minute!',
        artist: '-WILLOW',
        tags: 'r&b, pop, alternative, electropop, female vocals'
    },

    //5
    {
        name: 'Imagination',
        artist: '-Foster The People',
        tags: 'modern rock, pop, rock, indie, male vocals'
    },

    //6
    {
        name: 'Woman On The Moon (feat. UPSAHL)',
        artist: '-Yung Bae',
        tags: 'future funk, electropop, indie, modern, dance, female vocals'
    },

    //7
    {
        name: 'Problems',
        artist: '-Hey Violet',
        tags: 'electropop, indie, pop, dance pop, alternative, female vocals'
    },

    //8
    {
        name: 'Icy',
        artist: '-Pink Sweat$',
        tags: 'bedroom soul, pop, male vocals'
    },

    //9
    {
        name: 'Easy (With Kacey Musgraves feat. Mark Ronson)',
        artist: '-Troye Sivan',
        tags: 'pop, dance pop, electropop, male vocals'
    },

    //10
    {
        name: 'Dandelion',
        artist: '-Galantis, JVKE',
        tags: 'dance pop, edm, electro house, pop, dance pop, female vocals'
    },

    //11
    {
        name: 'Musician',
        artist: '-Porter Robinson',
        tags: 'electropop, dance pop, breakbeat, synthpop, indie, edm, male vocals'
    },

    //12
    {
        name:'Figure It Out',
        artist:'-Verzache',
        tags:'indie, alternative, r&b, underground, hip hop, emotional, sad, male vocals',
    },

    //13
    {
        name:'Outa My Head (with Jhon Mayer)',
        artist:'-Khalid, Jhon Mayer',
        tags:'electropop, r&b, pop, male vocals, pop rock',
    },

    //14
    {
        name:'Find An Island',
        artist:'-BENEE',
        tags:'pop, electropop, alternative, heavy bass, female vocals',
    },

    //15
    {
        name:'Lost In Your Light (feat. Miguel)',
        artist:'-Dua Lipa, Miguel',
        tags:'pop, dance, disco, r&b, contemporary, urban, synthpop, electropop, female vocals, male vocals',
    },

    //16
    {
        name:'Twilight',
        artist:'-Electric Light Orchestra',
        tags:'album rock, art rock, classic rock, rock, soft rock, symphonic, 80s, progressive, male vocals',
    },

    //17
    {
        name:'Through And Through',
        artist:'-Khai Dreams',
        tags:'lo-fi, indie, pop, slow, calm, melodic, male vocals',
    },

    //18
    {
        name:'Buttercup',
        artist:'-Jack Stauber',
        tags:'pop, electropop, indie, alternative, progressive, artistic, meme, lo-fi, male vocals',
    },

    //19
    {
        name:'Leave The Door Open',
        artist:'-Bruno Mars, Anderson .Paak, Silk Sonic',
        tags:'pop, pop soul, soul, smooth soul, male vocals',
    },

    //20
    {
        name:'Hallelujah',
        artist:'-Panic! At The Disco',
        tags:'alternative, soul, anthem, power pop, gospel, emo, modern rock, baroque pop, male vocals',
    },
];

//gets the song selection, allows you to use it outside of this document
export default function getSongSelection() {
    return songSelection;
}