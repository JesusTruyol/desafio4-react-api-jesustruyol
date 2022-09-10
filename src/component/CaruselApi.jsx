import React from 'react'
import Carousel from 'nuka-carousel/lib/carousel'

const CaruselApi = () => {
  return (
    <Carousel wrapAround={true} slidesToShow={1} autoplay={true} autoplayInterval={9500} animation={'fade'}>
        <img
          className=" carusel-img"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7349ae7a-95fb-48b3-a00b-b7cbced55724/dap7uvc-63436d59-e069-44b6-97eb-866d669531fd.png/v1/fill/w_1024,h_2400,strp/vegetto_ssj_blue_by_naironkr_dap7uvc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjQwMCIsInBhdGgiOiJcL2ZcLzczNDlhZTdhLTk1ZmItNDhiMy1hMDBiLWI3Y2JjZWQ1NTcyNFwvZGFwN3V2Yy02MzQzNmQ1OS1lMDY5LTQ0YjYtOTdlYi04NjZkNjY5NTMxZmQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qq6k8o7QvL5PfCPpwhtFtsLRXQ6NESRcHXD4n9Dw4yQ"
          alt="First slide"
        />
        <img
          className="carusel-img"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7349ae7a-95fb-48b3-a00b-b7cbced55724/ddv3gak-0b2406aa-b03c-4f19-8f66-b82a6edf4b79.png/v1/fill/w_1280,h_3950,strp/vegetto_super_saiyajin_by_naironkr_ddv3gak-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzk1MCIsInBhdGgiOiJcL2ZcLzczNDlhZTdhLTk1ZmItNDhiMy1hMDBiLWI3Y2JjZWQ1NTcyNFwvZGR2M2dhay0wYjI0MDZhYS1iMDNjLTRmMTktOGY2Ni1iODJhNmVkZjRiNzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Xzmy-BhNnzqYuhJDXUaPLHtgK-Gbu5tnQKjTE3pQcFs"
          alt="Second slide"
        />
        <img
          className="carusel-img"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7349ae7a-95fb-48b3-a00b-b7cbced55724/ddpna4m-3807dd24-1c2e-4ae7-b53f-7c91f0db96dd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczNDlhZTdhLTk1ZmItNDhiMy1hMDBiLWI3Y2JjZWQ1NTcyNFwvZGRwbmE0bS0zODA3ZGQyNC0xYzJlLTRhZTctYjUzZi03YzkxZjBkYjk2ZGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.x_jImdTTEIXHvmZKJxx8KzW3rAw6suDj5JN1N2CpZu0"
          alt="Third slide"
        />
    </Carousel>
  )
}

export default CaruselApi