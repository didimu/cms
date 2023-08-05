import React from 'react'
import { useState } from 'react'
import { CEO } from './CEO'


export default function Content() {
  const [currentTab, setCurrentTab] = useState("")
  return (
    <div>
<section>
  <button onClick={() => {setCurrentTab("CEO")}}>CEO</button>
  <button onClick={() => {setCurrentTab("BI")}}>BI</button>
  <button onClick={() => {setCurrentTab("CAT")}}>CAT</button>
</section>
<p>지금 누른 탭 이름은 : {currentTab}</p>

{currentTab === "CEO" && <CEO />}
{currentTab === "BI" && <h1>BI입니다.</h1>}
{currentTab === "CAT" && <h1>CAT입니다.</h1>}
    </div>
  )
}
