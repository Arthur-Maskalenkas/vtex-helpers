import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { ShoppingGuideContext } from "./context";
import { increaseCurrentPosition } from "./context/helpers";
import { ENUM_ACTIONS, shoppingGuideReducer } from "./context/reducer";
import {
  __SCHEMA_SITE_EDITOR_MAPPED_DEPARTAMENT,
  __SCHEMA_SITE_EDITOR_MAPPED_STEP, MERGED_ACTIONS_ANSWER, MERGED_ACTIONS_STEPS,
  __SCHEMA__SITE_EDITOR_MAPPED_RESULT
} from "./context/_interfaces/_schemas";
import {
  MOCK_DEFAULT_INITIAL_STATE,
  MOCK_DISPATH_INITIAL_STATE,
} from "./context/_mocks/mock-context";
import { Form, ShoppingGuideState } from "./context/_interfaces/_states";

//
// ** Disponibilizando os valores aos filhos por meio do provider **
//
const ShoppingGuideProvider = (props: ShoppingGuideState & { children: React.ReactNode }) => {
  const [shoppingGuide, dispathShoppingGuide] = useReducer(shoppingGuideReducer, MOCK_DEFAULT_INITIAL_STATE)
  const { children, departamentList } = props;


  useEffect(() => {
    console.log(props)
    const currentDepartament = 0
    const departamentListRemapped = increaseCurrentPosition(departamentList)

    const currentDepartamentData = (departamentList)[currentDepartament]
    const totalDepartaments = departamentListRemapped.length

    const stepListRemmapped = increaseCurrentPosition(currentDepartamentData?.items || [])
    const totalSteps = stepListRemmapped.length

    dispathShoppingGuide({
      type: ENUM_ACTIONS.INITIAL_STATE_WITHOUT_OPTIONS_TO_CHOOSE_DEPARTAMENT,
      payload: {
        initialState: {
          ...MOCK_DISPATH_INITIAL_STATE(totalDepartaments, departamentListRemapped, totalSteps, stepListRemmapped)
        }
      }
    })

  }, [])

  const dispatchDepartament = useCallback((departament: number): void => {
    const { totalDepartament } = shoppingGuide

    if (departament >= 0 && departament < totalDepartament) {
      dispathShoppingGuide({
        type: ENUM_ACTIONS.CURRENT_DEPARTAMENT,
        payload: {
          departament,
        },
      })
    }
  }, [shoppingGuide.totalDepartament])

  const dispathForm = useCallback((form: MERGED_ACTIONS_ANSWER): void => {
    const { ProductFieldReferenceID, __editorItemTitle, ProductFieldReferenceValue } = form


    dispathShoppingGuide({
      type: ENUM_ACTIONS.SUBMIT_FORM,
      payload: {
        form: { title: __editorItemTitle, name: ProductFieldReferenceID, value: ProductFieldReferenceValue ?? '' }
      },
    })

    return

  }, [shoppingGuide])

  const dispatchFinalizeTheDepartmentAndGoToTheSteps = useCallback(() => {
    const {
      currentDepartament,
      departamentList
    } = shoppingGuide

    if (departamentList && currentDepartament) {

      const currentDepartamentData = (departamentList)[currentDepartament]

      const stepListRemmapped = increaseCurrentPosition(currentDepartamentData?.items || [])

      dispathShoppingGuide({
        type: ENUM_ACTIONS.FINALIZE_THE_DEPARTMENT_AND_GO_TO_THE_STEPS,
        payload: {
          currentDepartament,
          stepList: stepListRemmapped,
          totalStep: stepListRemmapped.length
        }
      })
    }
  }, [
    shoppingGuide
  ])

  const dispatchStep = useCallback((
    action: MERGED_ACTIONS_STEPS,
    step: number = 0) => {
    const {
      currentStep,
      totalStep,
      maxStep
    } = shoppingGuide



    if (action === ENUM_ACTIONS.NEXT_STEP) {
      console.log(shoppingGuide)

      if (currentStep < totalStep - 1) {
        dispathShoppingGuide({
          type: ENUM_ACTIONS.NEXT_STEP,
        })
      } else {
        dispathShoppingGuide({
          type: ENUM_ACTIONS.STEPS_FINISHED,
        })
      }
    }

    if (action === ENUM_ACTIONS.PREVIOUS_STEP) {
      if (currentStep > 0) {
        dispathShoppingGuide({
          type: ENUM_ACTIONS.PREVIOUS_STEP,
        })
      }
    }

    if (action === ENUM_ACTIONS.CURRENT_STEP) {
      if (step && step >= 0 && step < totalStep) {
        dispathShoppingGuide({
          type: ENUM_ACTIONS.CURRENT_STEP,
          payload: {
            step
          }
        })
      }
    }

    if (action === ENUM_ACTIONS.GO_TO_STEP) {
      if ((step === 0 || step >= 0) && step <= maxStep) {
        dispathShoppingGuide({
          type: ENUM_ACTIONS.GO_TO_STEP,
          payload: {
            step
          }
        })
      }
    }
  }, [
    shoppingGuide.currentStep,
    shoppingGuide.totalStep,
    shoppingGuide.stepsFinished,
    shoppingGuide.maxStep
  ])

  const dispathReset = useCallback(() => {
    const {
      currentDepartament,
      departamentList
    } = shoppingGuide

    const currentDepartamentData = departamentList?.[currentDepartament]

    const stepListRemmapped = increaseCurrentPosition(currentDepartamentData?.items || [])

    dispathShoppingGuide({
      type: ENUM_ACTIONS.RESET,
      payload: {
        currentDepartament,
        stepList: stepListRemmapped,
        totalStep: stepListRemmapped.length
      }
    })
  }, [shoppingGuide])

  const dispathFormWarnings = useCallback((form: Form): void => {
    dispathShoppingGuide({
      type: ENUM_ACTIONS.FORM_WARNINGS,
      payload: {
        formWarning: form
      }
    })
  }, [shoppingGuide.formWarnings])

  const dispathStepsFinished = useCallback((): void => {
    dispathShoppingGuide({
      type: ENUM_ACTIONS.STEPS_FINISHED
    })
  }, [shoppingGuide.stepsFinished])




  const getDepartamentList = useMemo(() => shoppingGuide?.departamentList,
    [shoppingGuide.currentDepartament])
  const getStepList = useMemo(() => shoppingGuide?.stepList,
    [shoppingGuide.stepList])

  const getCurrentStep = useMemo(() => shoppingGuide?.stepList?.[shoppingGuide.currentStep],
    [shoppingGuide.stepList, shoppingGuide.currentStep])
  const getCurrentDepartament = useMemo(() => shoppingGuide.departamentList?.[shoppingGuide.currentDepartament], [shoppingGuide])

  const getFormWarnings = useMemo(() => shoppingGuide?.formWarnings,
    [shoppingGuide.formWarnings])
  const getMaxSteps = useMemo(() => shoppingGuide.maxStep,
    [shoppingGuide.maxStep])
  const verifyIfStepsIsFinished = useMemo(() => shoppingGuide.stepsFinished,
    [shoppingGuide.stepsFinished])

  return (
    <ShoppingGuideContext.Provider value={{
      getMaxSteps,
      verifyIfStepsIsFinished,
      dispathStepsFinished,
      getCurrentDepartament,
      getCurrentStep,
      getDepartamentList,
      getStepList,
      getFormWarnings,
      dispatchDepartament,
      dispatchStep,
      dispathReset,
      dispathForm,
      dispatchFinalizeTheDepartmentAndGoToTheSteps,
      dispathFormWarnings
    }}>
      {children}
    </ShoppingGuideContext.Provider>
  );
};


ShoppingGuideProvider.schema = {
  title: "App Shopping Guide",
};

export default ShoppingGuideProvider;
