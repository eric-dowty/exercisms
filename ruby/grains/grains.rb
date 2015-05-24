class Grains

  def self.square(number)
    2**(number-1)
  end

  def self.total
    (1..64).reduce(0) { |sum, num| sum+square(num) }
  end

end