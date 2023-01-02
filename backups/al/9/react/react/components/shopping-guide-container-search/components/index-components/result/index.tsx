import React, { useEffect } from 'react'
import { useShoppingGuideContext } from '../../../../../context'
import { CollectionResult } from '../../collections/collection-result'
import { Button, RenderIcons, WordRenderer } from '../../common'
import styles from './styles.css'
import { ShelfCustom } from './components/teste-result'
import { pickDepartmentId, pickSeeAllLink, urlApi } from './utils'
import { SliderLayout } from 'vtex.slider-layout'
import { MERGED_ACTIONS_ANSWER } from '../../../../../context/_interfaces/_schemas'



export const Result = () => {
  const {
    getStepList,
    getCurrentDepartament,
    dispathReset
  } = useShoppingGuideContext()

  const answersList = getStepList?.map((step) => (step.answer)) as Array<MERGED_ACTIONS_ANSWER> | undefined
  const [ItemsSlider, setItemsSlider] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  useEffect(() => {
    const url = urlApi(answersList)

    console.log('url', url)
    setIsLoading(true)
    fetch(url)
      .then((response) => response.json())

      .then((response) => {
        setIsLoading(false)
        const filterByCategory = response?.filter((item: { categoriesIds: string[] }) => {
          const departmentId = pickDepartmentId(item.categoriesIds)
          return departmentId === getCurrentDepartament?.departmentId
        })

        if (filterByCategory?.length > 0) {
          setItemsSlider(filterByCategory)
        }
      })
      .catch((err) => {
        setIsLoading(false)
        console.log('err', err)
      });
  }, [])


  console.log('items slider', ItemsSlider)
  return (
    <div className={`${styles.containerResultLayout} ${ItemsSlider?.length > 0 ? styles.withResult : styles.withoutResult}`}>


      {isLoading
        ?
        (
          <></>
        ) :
        (
          ItemsSlider?.length > 0
            ?

            (
              <>
                <div className={styles.containerResultLeftSide}>
                  <Button onClick={() => dispathReset()} className='reset-button' variant='secondary'>Refazer teste</Button>

                  <WordRenderer>
                    {getCurrentDepartament?.resultTitle}
                  </WordRenderer>

                  <WordRenderer as='text'>
                    {getCurrentDepartament?.resultDescription}
                  </WordRenderer>

                  {console.log('answw', answersList)}
                  <CollectionResult items={answersList?.map((answer) =>
                  ({
                    icon: <RenderIcons variant='primary' name='Couch' />,
                    label: answer?.__editorItemTitle || ''
                  }))} />
                </div>

                <div className={styles.containerResultRightSide}>

                  <SliderLayout infinite={false} fullWidth={true} showNavigationArrows={"desktopOnly"} showPaginationDots='mobileOnly' itemsPerPage={
                    {
                      phone: 1,
                      tablet: 2,
                      desktop: 3
                    }}>
                    {ItemsSlider?.map((answer, index) => (
                      <div key={index}>
                        <ShelfCustom data={answer} />
                      </div>
                    ))}
                  </SliderLayout>
                  <Button variant='tertiary' as='a' href={pickSeeAllLink(getCurrentDepartament?.departmentId ?? '0', answersList)}>
                    Ver todos
                  </Button>
                </div>
              </>
            )

            :
            (
              <div >
                <Button onClick={() => dispathReset()} className='reset-button' variant='secondary'>Refazer teste</Button>

                <div style={{ display: 'flex', flexDirection: 'column' }}>

                  <WordRenderer>
                    Nenhum Resultado Encontrado
                  </WordRenderer>

                  <WordRenderer as='text'>
                    Nenhum Resultado Encontrado. Por favor, refaça o teste utilizando outras respostas.
                  </WordRenderer>
                </div>
              </div>
            )
        )
      }




    </div >
  )
}













