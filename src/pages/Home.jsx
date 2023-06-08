import { Image } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const Home = () => {
  return (
    <Carousel>
      <div>
        {/* <img
          src="https://firebasestorage.googleapis.com/v0/b/ecommerce-ada.appspot.com/o/Samsung%20Galaxy%20A33%20128GB.webp?alt=media&token=44a4cf9b-d812-41b9-b655-fbaf79e2c6b2&_gl=1*14m2nij*_ga*MTc1MTc5MTY5NS4xNjg0NzE5MzYw*_ga_CW55HF8NVT*MTY4NTUzOTI1MC43LjEuMTY4NTUzOTQ5OS4wLjAuMA.."
          alt="Imagen 1"
        /> */}
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '300px' }}
          src="https://firebasestorage.googleapis.com/v0/b/ecommerce-ada.appspot.com/o/Samsung%20Galaxy%20A33%20128GB.webp?alt=media&token=44a4cf9b-d812-41b9-b655-fbaf79e2c6b2&_gl=1*14m2nij*_ga*MTc1MTc5MTY5NS4xNjg0NzE5MzYw*_ga_CW55HF8NVT*MTY4NTUzOTI1MC43LjEuMTY4NTUzOTQ5OS4wLjAuMA.."
          alt="imagen1"
          m={3}
        />
        <p className="legend">Imagen 1</p>
      </div>
      <div>
        {/* <img
          src="https://firebasestorage.googleapis.com/v0/b/ecommerce-ada.appspot.com/o/Samsung%20Galaxy%20A23%205G%20128GB.webp?alt=media&token=b5e30607-8800-4399-807c-2872086dad56&_gl=1*yybgln*_ga*MTc1MTc5MTY5NS4xNjg0NzE5MzYw*_ga_CW55HF8NVT*MTY4NTUzOTI1MC43LjEuMTY4NTUzOTg2MS4wLjAuMA.."
          alt="Imagen 2"
        /> */}
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '300px' }}
          src="https://firebasestorage.googleapis.com/v0/b/ecommerce-ada.appspot.com/o/Samsung%20Galaxy%20A23%205G%20128GB.webp?alt=media&token=b5e30607-8800-4399-807c-2872086dad56&_gl=1*yybgln*_ga*MTc1MTc5MTY5NS4xNjg0NzE5MzYw*_ga_CW55HF8NVT*MTY4NTUzOTI1MC43LjEuMTY4NTUzOTg2MS4wLjAuMA.."
          alt="imagen1"
          m={3}
        />
        <p className="legend">Imagen 2</p>
      </div>
      <div>
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '300px' }}
          src="https://firebasestorage.googleapis.com/v0/b/ecommerce-ada.appspot.com/o/Samsung%20Galaxy%20A23%205G%20128GB.webp?alt=media&token=b5e30607-8800-4399-807c-2872086dad56&_gl=1*yybgln*_ga*MTc1MTc5MTY5NS4xNjg0NzE5MzYw*_ga_CW55HF8NVT*MTY4NTUzOTI1MC43LjEuMTY4NTUzOTg2MS4wLjAuMA.."
          alt="imagen1"
          m={3}
        />
        <p className="legend">Imagen 3</p>
      </div>
      <div>
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '300px' }}
          src="https://firebasestorage.googleapis.com/v0/b/ecommerce-ada.appspot.com/o/Samsung%20Galaxy%20A23%205G%20128GB.webp?alt=media&token=b5e30607-8800-4399-807c-2872086dad56&_gl=1*yybgln*_ga*MTc1MTc5MTY5NS4xNjg0NzE5MzYw*_ga_CW55HF8NVT*MTY4NTUzOTI1MC43LjEuMTY4NTUzOTg2MS4wLjAuMA.."
          alt="imagen1"
          m={3}
        />
        <p className="legend">Imagen 4</p>
      </div>
    </Carousel>
  )
}
