import React from 'react'
import styles from "./Branches.module.css"
import BranchCard from '../../components/BranchCard/BranchCard'

export default function ManageBranches() {
  return (
    <div className={styles.BranchesContainer}>
      <h4>Manage Branch</h4>
      <div className={styles.BranchWrapper}>
        <BranchCard name={`Branch Name`} details={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias quaerat dignissimos officiis iste libero saepe facilis hic velit quisquam?`} operationHour={`12am to 5pm`} mapLink={`https://someurl.com`} />
      </div>
    </div>
  )
}
