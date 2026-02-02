"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { practiceAreas } from "@/lib/content"

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  practiceArea: "",
  message: "",
  consent: false,
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    if (!values.fullName.trim()) {
      nextErrors.fullName = "Παρακαλώ συμπληρώστε το ονοματεπώνυμο."
    }
    if (!values.email.trim()) {
      nextErrors.email = "Παρακαλώ συμπληρώστε το email."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Το email δεν φαίνεται έγκυρο."
    }
    if (!values.message.trim()) {
      nextErrors.message = "Παρακαλώ γράψτε ένα σύντομο μήνυμα."
    }
    if (!values.consent) {
      nextErrors.consent = "Απαιτείται συγκατάθεση για την επεξεργασία."
    }
    return nextErrors
  }

  const handleChange = (key: keyof typeof initialState, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setStatus("loading")
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus("success")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Ονοματεπώνυμο *</Label>
          <Input
            id="fullName"
            value={values.fullName}
            onChange={(event) => handleChange("fullName", event.target.value)}
            placeholder="Ονοματεπώνυμο"
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName ? (
            <p id="fullName-error" className="text-xs text-destructive">
              {errors.fullName}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder="name@company.com"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Τηλέφωνο</Label>
          <Input
            id="phone"
            value={values.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            placeholder="+30 210 000 0000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="practiceArea">Τομέας ενδιαφέροντος</Label>
          <Select
            value={values.practiceArea}
            onValueChange={(value) => handleChange("practiceArea", value)}
          >
            <SelectTrigger id="practiceArea" aria-label="Τομέας ενδιαφέροντος">
              <SelectValue placeholder="Επιλέξτε τομέα" />
            </SelectTrigger>
            <SelectContent>
              {practiceAreas.map((area) => (
                <SelectItem key={area.slug} value={area.title}>
                  {area.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Μήνυμα *</Label>
        <Textarea
          id="message"
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          placeholder="Περιγράψτε συνοπτικά την ανάγκη σας..."
          rows={6}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            checked={values.consent}
            onCheckedChange={(checked) => handleChange("consent", Boolean(checked))}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <Label htmlFor="consent" className="text-sm text-muted-foreground">
            Συμφωνώ με την επεξεργασία των προσωπικών μου δεδομένων σύμφωνα με την
            <Link href="/privacy" className="ml-1 underline underline-offset-4">
              Πολιτική Απορρήτου
            </Link>
            .
          </Label>
        </div>
        {errors.consent ? (
          <p id="consent-error" className="text-xs text-destructive">
            {errors.consent}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "loading"}>
          {status === "loading" ? "Αποστολή..." : "Αποστολή μηνύματος"}
        </Button>
        {status === "success" ? (
          <p className="text-sm text-foreground">
            Ευχαριστούμε. Θα επικοινωνήσουμε εντός 1-2 εργάσιμων ημερών.
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">
            Η αποστολή μηνύματος δεν δημιουργεί σχέση εντολέα-δικηγόρου.
          </p>
        )}
      </div>
    </form>
  )
}
