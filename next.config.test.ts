import { describe, expect, it } from "vitest";

import nextConfig from "./next.config";

describe("Next.js development origins", () => {
  it("allows the LAN host used to preview the development server", () => {
    expect(nextConfig.allowedDevOrigins).toContain("10.20.131.170");
  });
});
