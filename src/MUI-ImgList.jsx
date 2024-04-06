import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
    return (
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={150}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
}

const itemData = [
    {
      img: 'https://oldschool.runescape.wiki/images/Acorn_5.png?262f7',
      title: 'image 1',
    },
    {
        img: 'https://oldschool.runescape.wiki/images/Willow_seed_5.png?e7584',
        title: 'image 2',
    },
    {
        img: 'https://oldschool.runescape.wiki/images/Maple_seed_5.png?ee59d',
        title: 'image 3',
    },
    {
        img: 'https://oldschool.runescape.wiki/images/Yew_seed_5.png?eb8e4',
        title: 'image 4',
    },
    {
        img: 'https://oldschool.runescape.wiki/images/Magic_seed_5.png?db296',
        title: 'image 5',
    },
    {
        img: 'https://oldschool.runescape.wiki/images/Apple_tree_seed_5.png?8276d',
        title: 'image 6',
    },
    {
        img: 'https://oldschool.runescape.wiki/images/Banana_tree_seed_5.png?e8ce4',
        title: 'image 7',
    }
];