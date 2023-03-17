import React from 'react'

type TDebuggerStates = {
  state: any
}

export const DebuggerStates = ({ state }: TDebuggerStates) => {
  React.useEffect(() => {
    const debugList = (state: any) => Object.keys(state).map(
      (key) => {

        // @ts-ignore
        const thisAttributeIsObjectOrArray = typeof state[key] === 'object' && state[key] !== null

        if (thisAttributeIsObjectOrArray) {
          return
        }

        // @ts-ignore
        return `<li>${key}: ${JSON.stringify(state[key])}</li>`
      }
    );

    const otherDebugList = {
      steps_length: state?.steps?.length,
      steps_answered_length: state?.steps_answered?.length,
      filters_answered_length: state?.filters_answered?.length,
    }

    const debugState = debugList(state)
    const debugOtherState = debugList(otherDebugList)


    const debugHtml = `
      <div style="position: fixed; top: 50%; transform: translateY(-50%); left: 0; background-color: white;">
        <ul style="background-color: white; padding: 8px; margin: 0; border-radius: 4px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); z-index: 9999;">
          ${debugState.join("")}
        </ul>
        <hr style="margin: 0; border: 0; border-top: 1px solid #ccc; border-bottom: 1px solid #fff;"/>
        <ul style="background-color: white; padding: 8px; margin: 0; border-radius: 4px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); z-index: 9999;">
        ${debugOtherState.join("")}
        </ul>
      </div>
    `;
    const debugDiv = document.createElement("div"); // cria uma nova div
    debugDiv.innerHTML = debugHtml; // adiciona o HTML do debug como conteúdo da div
    document.body.appendChild(debugDiv); // adiciona a div ao final do corpo do documento

    return () => {
      document.body.removeChild(debugDiv); // remove a div do corpo do documento ao desmontar o componente
    };
  }, [state])

  return <div></div>
}
