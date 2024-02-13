import { useState } from "react"
import confetti from 'canvas-confetti'

export const useChangeElements = () => {
    const [index, setIndex] = useState(0)
    const [textP, setTextP] = useState('Vamos, respondeme! ')
    const [image, setImage] = useState('https://tenor.com/es-US/view/wink-lightning-mcqueen-cars-smile-if-you-catch-my-drift-gif-26641275')

    const options = ['Segura?', 'Segurisima?', 'Estas completamente segura?', 'No te arrepentiras?', 'Pero si estas segura?', 'No hay vuelta atras', 'No hay devoluciones', 'No hay garantias', 'No hay reembolsos', 'No hay cambios', 'No hay nada', 'No hay', 'Que no hay']

    const handleButtonNo = () => {
        setIndex(index + 1)
        setImage('https://tenor.com/es-US/view/wink-lightning-mcqueen-cars-smile-if-you-catch-my-drift-gif-26641275')
        setTextP(options.at(index))
        
        if(index === options.length - 1) setIndex(0)
    }

    const handleButtonYes = () => {
        setImage("https://tenor.com/es-US/view/wink-lightning-mcqueen-cars-smile-if-you-catch-my-drift-gif-26641275")
        setTextP('Gracias por aceptar, te amo mucho <3')
        confetti()
    }

    return { handleButtonNo, handleButtonYes, textP, image }
}
