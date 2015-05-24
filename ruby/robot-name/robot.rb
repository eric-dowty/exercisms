class Robot

  attr_accessor :tag

  def initialize
    @tag = nil
  end

  def name
    @tag ||= "#{letters}#{numbers}"
  end

  def letters
    sampler(('A'..'Z'), 2)
  end

  def numbers
    sampler((0..9), 3)
  end

  def sampler(range, value)
    range.to_a.sample(value).join
  end

  def reset
    @tag = nil
  end

end