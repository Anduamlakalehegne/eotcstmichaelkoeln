"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle2 } from "lucide-react"
import { supabaseClient } from "@/lib/supabase-client"

interface RSVPFormProps {
  eventId: number
  eventTitle: string
  maxAttendees?: number
  currentAttendees?: number
}

export function RSVPForm({ eventId, eventTitle, maxAttendees, currentAttendees }: RSVPFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: Number.parseInt(value) || 1 }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Check if there's space available
      if (maxAttendees && currentAttendees) {
        const totalGuests = currentAttendees + formData.guests
        if (totalGuests > maxAttendees) {
          throw new Error(`Sorry, only ${maxAttendees - currentAttendees} spots remaining for this event.`)
        }
      }

      // Insert RSVP into database
      const { error: rsvpError } = await supabaseClient.from("event_rsvps").insert({
        event_id: eventId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        guests: formData.guests,
        message: formData.message,
      })

      if (rsvpError) throw rsvpError

      // Update event attendee count
      const { error: updateError } = await supabaseClient
        .from("events")
        .update({
          current_attendees: (currentAttendees || 0) + formData.guests,
        })
        .eq("id", eventId)

      if (updateError) throw updateError

      setSuccess(true)
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: 1,
        message: "",
      })
    } catch (err: any) {
      setError(err.message || "Failed to submit RSVP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const isFull = maxAttendees && currentAttendees && currentAttendees >= maxAttendees

  return (
    <Card>
      <CardHeader>
        <CardTitle>Save Your Spot for {eventTitle}</CardTitle>
        <CardDescription>
          {isFull
            ? "This event is currently full. Please check back later for availability."
            : maxAttendees
              ? `${currentAttendees} / ${maxAttendees} attending`
              : "Register your attendance for this event"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        {success ? (
          <div className="text-center py-6">
            <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">Your Save Your Spot has been successfully submitted.</p>
            <p className="text-sm text-gray-500">We look forward to seeing you at the event!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading || isFull}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading || isFull}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading || isFull}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests *</Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max={maxAttendees ? maxAttendees - (currentAttendees || 0) : undefined}
                value={formData.guests}
                onChange={handleNumberChange}
                required
                disabled={loading || isFull}
              />
              {maxAttendees && (
                <p className="text-xs text-gray-500">{maxAttendees - (currentAttendees || 0)} spots remaining</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requests or information"
                disabled={loading || isFull}
              />
            </div>
          </form>
        )}
      </CardContent>
      <CardFooter>
        {!success && (
          <Button type="submit" onClick={handleSubmit} disabled={loading || isFull} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : isFull ? (
              "Event is Full"
            ) : (
              "Submit"
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
