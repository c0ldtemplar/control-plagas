"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto con usted pronto.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre Completo *</Label>
          <Input id="nombre" name="nombre" placeholder="Juan Pérez" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" placeholder="juan@ejemplo.com" required />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input id="telefono" name="telefono" type="tel" placeholder="+54 11 1234-5678" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="servicio">Servicio de Interés *</Label>
          <Select name="servicio" required>
            <SelectTrigger id="servicio">
              <SelectValue placeholder="Seleccione un servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="control-palomas">Control de Palomas</SelectItem>
              <SelectItem value="control-murcielagos">Control de Murciélagos</SelectItem>
              <SelectItem value="sanitizacion">Sanitización</SelectItem>
              <SelectItem value="desratizacion">Desratización</SelectItem>
              <SelectItem value="desinsectacion">Desinsectación</SelectItem>
              <SelectItem value="otro">Otro / Consulta General</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="direccion">Dirección del Servicio</Label>
        <Input id="direccion" name="direccion" placeholder="Calle, número, ciudad" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tipo-propiedad">Tipo de Propiedad *</Label>
        <Select name="tipo-propiedad" required>
          <SelectTrigger id="tipo-propiedad">
            <SelectValue placeholder="Seleccione el tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="residencial">Residencial</SelectItem>
            <SelectItem value="comercial">Comercial</SelectItem>
            <SelectItem value="industrial">Industrial</SelectItem>
            <SelectItem value="institucional">Institucional</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje / Descripción del Problema *</Label>
        <Textarea id="mensaje" name="mensaje" placeholder="Describa su situación o consulta..." rows={5} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="urgencia">Nivel de Urgencia</Label>
        <Select name="urgencia">
          <SelectTrigger id="urgencia">
            <SelectValue placeholder="Seleccione la urgencia" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="baja">Baja - Consulta general</SelectItem>
            <SelectItem value="media">Media - Programar en días</SelectItem>
            <SelectItem value="alta">Alta - Necesito atención pronto</SelectItem>
            <SelectItem value="emergencia">Emergencia - Requiere atención inmediata</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
      </Button>

      <p className="text-sm text-muted-foreground">
        * Campos obligatorios. Sus datos serán tratados de forma confidencial según nuestra política de privacidad.
      </p>
    </form>
  )
}
