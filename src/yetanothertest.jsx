function yetanothertest() {
     const imageLinks = [
          'https://m.media-amazon.com/images/M/MV5BMTY5MDc0ODkyNV5BMl5BanBnXkFtZTcwODI4ODg3Ng@@._V1_.jpg',
          'https://www.freep.com/gcdn/presto/2020/01/14/PDTF/a6a90e98-f08d-4521-b071-255838008e37-Kermit.jpg?crop=1499,843,x1,y429&width=1499&height=843&format=pjpg&auto=webp',
          'https://i.ytimg.com/vi/LxegkOG7unY/maxresdefault.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFanIqkwx3rDUSIZUGFiqC6-4xUflTu5WEQ&usqp=CAU',
          'https://howlround.com/sites/default/files/2018-12/kermit.png',
          'https://img.atlasobscura.com/ECAVoXb-OgLzUs4uLZMLduXtm-GZtyx3IAqC4NvN3T4/rt:fit/h:390/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9lYmVl/NTRjOGQ3NjM3M2Rj/NmVfMTMzNjE5MzY3/MTNfYjlmZDdjOWZh/Nl9rLmpwZw.jpg',
          'https://toughpigs.com/wp-content/uploads/2021/07/313-Kermit-yells-sf-1024x571-1.jpg',
          'https://static.wikia.nocookie.net/vinesauce/images/6/62/Kermit_the_Frog.jpg/revision/latest?cb=20200425202651',
          'https://i5.walmartimages.com/asr/2c75f70f-c906-4b2b-8573-08be4bdb2a10.b5cef4898e6f50cd6b1fb7346a699742.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
          'https://i.pinimg.com/236x/ec/38/72/ec387236834ef4d73d0f8b4508f74f53.jpg',
          'https://media.licdn.com/dms/image/C4D12AQFJea_wkgaPmw/article-cover_image-shrink_600_2000/0/1520208433896?e=2147483647&v=beta&t=_1uMuAxG23jc2yQPh6ZeucfifDf4LjXkZ7i-FWkh_6Y',
          'https://media.istockphoto.com/id/1308907024/photo/a-person-disguised-as-kermit-the-frog-retiro-park-madrid-spain.jpg?s=612x612&w=0&k=20&c=2z217R-DzjxkMP3Fin00dX1SuU92Ex0uTzRTRhSoxII='
     ];
     return (
          <div>
               <h1>Here are some cool pictures of Kermit</h1>
               <div className="gallery">
               {imageLinks.map((url, index) => (
               <img
               key={index}
               src={url}
               alt={`Image ${index + 1}`}
               style={{ width: '200px', height: 'auto', margin: '5px' }}
               />
               ))}
          </div>
     </div>
     );
}

export default yetanothertest;