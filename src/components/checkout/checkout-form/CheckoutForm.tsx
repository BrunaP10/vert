"use client";

import { useState } from "react";
import styles from "./CheckoutForm.module.css";

export interface CustomerData {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

interface CheckoutFormProps {
  onSubmit: (data: CustomerData) => void;
}

export default function CheckoutForm({
  onSubmit,
}: CheckoutFormProps) {
  const [formData, setFormData] = useState<CustomerData>({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <section className={styles.section}>
        <h2>Dados pessoais</h2>

        <div className={styles.field}>
          <label htmlFor="name">Nome completo</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            autoComplete="name"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            autoComplete="email"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Telefone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            autoComplete="tel"
            required
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Endereço de entrega</h2>

        <div className={styles.field}>
          <label htmlFor="zipCode">CEP</label>
          <input
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="00000-000"
            autoComplete="postal-code"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Rua, avenida..."
            autoComplete="street-address"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="number">Número</label>
          <input
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Número"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="complement">
            Complemento (opcional)
          </label>
          <input
            id="complement"
            name="complement"
            value={formData.complement}
            onChange={handleChange}
            placeholder="Apartamento, bloco..."
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="neighborhood">Bairro</label>
          <input
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            placeholder="Seu bairro"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Sua cidade"
            autoComplete="address-level2"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="state">Estado</label>
          <input
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="UF"
            maxLength={2}
            autoComplete="address-level1"
            required
          />
        </div>
      </section>

      <button
        type="submit"
        className={styles.submitButton}
      >
        Continuar para pagamento
      </button>
    </form>
  );
}
