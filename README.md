# Take Home Test from Fetch Rewards

## by: Kurt Reynolds

---

### GET Request

- create async function fetchForm
- fetch data from API using GET method
- convert response into JSON object
- if response was successful (data present)
- - map the occupations array and insert results to the Form.Select element with id of "occupatiions". Clicking on that particular element triggers the fetchForm function.
- - use similar process for the states array:
- - - create variable stateArray and set equal to data.states
- - - map over stateArray and insert results into Form.Select element with id of "states".
