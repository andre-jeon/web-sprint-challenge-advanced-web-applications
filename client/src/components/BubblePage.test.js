import React from "react";
import { render, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchApi as mockApi } from './fetchApi'
import '@testing-library/jest-dom/extend-expect'

jest.mock('./fetchApi')

const mockData = {
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc"
      },
      id: 2
    }
  ]
}


test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockApi.mockResolvedValueOnce(mockData)
  const { debug, getByText, getAllByText } = render(<BubblePage />)
  await waitFor(() => {
      expect(getByText(/aliceblue/i)).toBeInTheDocument()
      expect(getAllByText(/color/i)).toHaveLength(1)
  })
  debug();
});
