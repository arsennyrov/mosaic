import React, { useLayoutEffect, useRef, useState } from "react";
import "./Mosaic.css";

const Mosaic = ({ data }) => {
    const [containerWidth, setContainerWidth] = useState(0)
    const [containerHeight, setContainerHeight] = useState(500)
    const ref = useRef()

    const onResize = () => {
        setContainerWidth(ref.current.clientWidth)
        setContainerHeight(ref.current.clientHeight)
    }
        
    useLayoutEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
    }, []);

    const containerSquare = containerWidth * containerHeight
    const dataSum = data.map(item => item.value).reduce((partialSum, a) => partialSum + a, 0);

    let dataS = []

    for (let i = 0; i < data.length; i += 1) {
        dataS.push((data[i].value * containerSquare) / dataSum)
    }

    const PlacementBlocks = ({currentWidth, currentHeight, index}) => {
        if (index > dataS.length - 1) return
        const width = currentWidth < currentHeight ? currentWidth : dataS[index] / currentHeight
        const height = currentWidth > currentHeight ? currentHeight : dataS[index] / currentWidth
        const residualWidth = currentWidth > currentHeight ? currentWidth - width : currentWidth
        const residualHeight = currentWidth < currentHeight ? currentHeight - height : currentHeight
        return (
            <>
                <div style={{width: width, height: height, backgroundColor: data[index].color}} className="mosaic__item">
                    <div style={{backgroundColor: `${data[index].color}`}} className="mosaic__item-block">
                        <p>{data[index].value}</p>
                        <p>{data[index].color}</p>
                    </div>
                </div>
                <div style={{display: `${residualHeight < residualWidth ? 'flex' : 'block'}`, flexShrink: 0}}>
                    <PlacementBlocks
                        index={index + 1}
                        currentWidth={currentHeight < currentWidth ? currentWidth - width : width}
                        currentHeight={currentHeight > currentWidth ? currentHeight - height : height}
                    />
                </div>
            </>
        )
    }

    return (
        <div ref={ref} style={{width: '60vw', height: '60vh', display: `${containerHeight < containerWidth ? 'flex' : 'block'}`}} className="mosaic">
            <PlacementBlocks currentWidth={containerWidth} currentHeight={containerHeight} index={0} />
        </div>
    );
    };

export default Mosaic;
