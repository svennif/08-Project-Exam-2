import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DeleteEstablishments from "./DeleteEstablishments";
import { FaSyncAlt } from "react-icons/fa";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  image: yup.string().required(),
  price: yup.number().required().min(500),
  maxGuests: yup.number().required(),
  description: yup.string().required().min(10).max(140),
});

function EstablishmentPatchForm({
  onSubmit,
  name,
  email,
  image,
  price,
  description,
  maxGuests,
}) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const deletePath = "establishments/";
  const historyPath = "/admin/hotels";
  let { id } = useParams();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="name">
        <Form.Label>Hotel name</Form.Label>
        <Form.Control
          defaultValue={name}
          type="text"
          name="name"
          ref={register}
          isInvalid={errors.name}
        />
        <p>
          <strong>
            <i>{errors.name?.message}</i>
          </strong>
        </p>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          defaultValue={email}
          type="text"
          name="email"
          ref={register}
          isInvalid={errors.email}
          placeholder="Enter email"
        />
        <p>
          <strong>
            <i>{errors.name?.message}</i>
          </strong>
        </p>
      </Form.Group>
      <Form.Group controlId="maxGuests">
        <Form.Label>Max guests</Form.Label>
        <Form.Control
          defaultValue={maxGuests}
          type="number"
          name="maxGuests"
          ref={register}
          isInvalid={errors.maxGuests}
          placeholder="Max guests"
        />
        <p>
          <strong>
            <i>{errors.maxGuests?.message}</i>
          </strong>
        </p>
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          defaultValue={price}
          type="number"
          min="500"
          name="price"
          ref={register}
          isInvalid={errors.price}
          placeholder="Enter price"
        />
        <p>
          <strong>
            <i>{errors.price?.message}</i>
          </strong>
        </p>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          defaultValue={description}
          as="textarea"
          name="description"
          ref={register}
          isInvalid={errors.description}
          placeholder="Description... "
        />
        <p>
          <strong>
            <i>{errors.description?.message}</i>
          </strong>
        </p>
      </Form.Group>
      <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control
          defaultValue={image}
          type="text"
          name="image"
          ref={register}
          isInvalid={errors.image}
          placeholder="Enter image"
        />
        <p>
          <strong>
            <i>{errors.image?.message}</i>
          </strong>
        </p>
      </Form.Group>
      <Button type="submit" className="mr-3">
        Update <FaSyncAlt className="ml-1" />
      </Button>
      <DeleteEstablishments
        historyPath={historyPath}
        id={id}
        deletePath={deletePath}
      />
    </Form>
  );
}

EstablishmentPatchForm.propTypes = {
  name: PropTypes.string,
  onSubmit: PropTypes.func,
  email: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  maxGuests: PropTypes.number,
  description: PropTypes.string,
  address: PropTypes.string,
  id: PropTypes.string,
};

export default EstablishmentPatchForm;