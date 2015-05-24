class Year

  attr_reader :year

  def initialize(year)
    @year = year
  end

  def by_4?
    year%4 == 0
  end

  def by_100?
    year%100 != 0
  end

  def by_400?
    year%400 == 0
  end

  def leap?
    by_4? && by_100? || by_400?
  end

  def self.leap?(year)
    new(year).leap?
  end

end