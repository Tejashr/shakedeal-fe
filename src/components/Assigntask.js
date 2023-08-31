import React, { useState } from "react";

function AssignTask() {
  const [task, setTask] = useState("");
  //initializing the teams
  const [team, setTeam] = useState([
    {
      name: "Team 1",
      members: [
        {
          name: "mem 1",
          priority: 3,
        },
        {
          name: "mem 2",
          priority: 1,
        },
        {
          name: "mem 3",
          priority: 2,
        },
      ],
      memberIndex: 0,
    },
    {
      name: "Team 2",
      members: [
        {
          name: "mem 4",
          priority: 3,
        },
        {
          name: "mem 5",
          priority: 1,
        },
        {
          name: "mem 6",
          priority: 2,
        },
      ],
      memberIndex: 0,
    },
  ]);
  const [currentTeam, setCurrentTeam] = useState(0);
  const [assignedTasks, setassignedTasks] = useState([]);

  const assignTask = () => {
    //checking enterd task is empty if empty break the code and return
    if (task === "") {
      alert("Please enter a task");
      return;
    }
    // currentTeam is an index of selected team by dropdown
    const cteam = team[currentTeam];

    //sorting accornding to priority
    const sortedMembers = [...cteam.members].sort(
      (a, b) => b.priority - a.priority
    );

    const currentMember = sortedMembers[cteam.memberIndex];
    const atask = `${task} is assigned to ${currentMember.name}`;

    //putting the current task and name in  assigned tasks list
    setassignedTasks([...assignedTasks, atask]);

    //changing the member index in circular pattern accronding to round robin manner
    cteam.memberIndex = (cteam.memberIndex + 1) % cteam.members.length;
    setTask("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
      }}
    >
      <input
        type="text"
        className="form-control w-25 mt-2"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <select
        className="form-control w-25"
        onChange={(e) => {
          setCurrentTeam(e.target.value);
        }}
      >
        {team.map((t, index) => {
          return (
            <option value={index} key={index}>
              {t.name}
            </option>
          );
        })}
      </select>
      <button
        className="btn btn-primary"
        onClick={() => {
          assignTask();
        }}
      >
        Assign Task
      </button>
      {assignedTasks.map((res) => {
        return <p>{res}</p>;
      })}
    </div>
  );
}

export default AssignTask;
