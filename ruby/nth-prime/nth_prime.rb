class Prime

  def self.nth(number)
    error if number == 0
    find_primes(number)   
  end

  def self.find_primes(number, check = 3, primes = [2])
    until primes.size == number
      primes << check if count(check, primes) == 0
      check += 1
    end  
    primes.last
  end

  def self.count(check, primes)
    primes.count do |num| 
      check%num == 0
    end
  end 

  def self.error
    raise ArgumentError.new("Error")
  end

end

