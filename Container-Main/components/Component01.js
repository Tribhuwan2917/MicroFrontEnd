import React from 'react'
const Comp01 =React.lazy(()=>import("MicroFrontend2/Component01"))
function Component011() {
  return (
    <div>
      This is Component01 from Main- containerpppppppppppppppppppppppppppppp
      <Comp01></Comp01>
    </div>
  )
}

export default Component011
