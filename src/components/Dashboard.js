import React, { useState } from "react"
import { Card, Alert, Container, CardGroup } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Header from "../components/Header"
import "../style.css"
export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="background-white">
      <Header buttonFunc={handleLogout} buttonText={"Log out"}/>
      
      <div style={{ marginLeft: "110px", paddingTop: "40px"}}>
          <h2 className="mb-2">Your Account</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link> */}
      </div>
      
      <Container className="justify-content-left" style={{marginTop:"30px", marginLeft: "101px"}}>
      <CardGroup>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
     
      </CardGroup>
      </Container>
    </div>
  )
}
