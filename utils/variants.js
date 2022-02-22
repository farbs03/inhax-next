export const containerVariant = {
    visible:{
        opacity: 1,
        transition: {
            staggerChildren: "0.28"
        }
    },
    hidden:{
        opacity: 0,

    }
    
}

export const textVariant = {
    visible:{
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    hidden:{
        opacity: 0,

    }
    
}

export const eventVariant = {
    visible:{
        x: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness:50
        }
    },
    hidden:{
        x: '100vw'

    }
    
}

let illustrationVariant = {
    hidden: {
        y: '20vh'
    },
    visible:{
        y:0,
        transition: {
            duration: 0.7,
            type: 'spring',
            stiffness: 60
        }
    }
}

export const teamVariant = {
    visible:{
        opacity: 1,
        transition: {
            duration: 0.7,
            type: 'spring',
            stiffness: 80
        }
    },
    hidden:{
        opacity: 0

    }
    
}
